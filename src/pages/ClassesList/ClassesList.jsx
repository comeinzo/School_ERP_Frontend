import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { classService } from '../../services/classService';
import ClassCard from '../../components/Classes/ClassCard';
// import SearchFilter from '../../components/common/SearchFilter';
// import './ClassesList.css';

const ClassesList = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMedium, setFilterMedium] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  useEffect(() => {
    fetchClasses();
  }, []);

  useEffect(() => {
    filterClasses();
  }, [classes, searchTerm, filterMedium]);

  const fetchClasses = async () => {
    try {
      setLoading(true);
      const response = await classService.getClasses();
      setClasses(response);
      setFilteredClasses(response);
    } catch (error) {
      console.error('Error fetching classes:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterClasses = () => {
    let filtered = [...classes];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(cls => 
        cls.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cls.medium.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Medium filter
    if (filterMedium !== 'all') {
      filtered = filtered.filter(cls => cls.medium === filterMedium);
    }

    setFilteredClasses(filtered);
  };

  const handleDeleteClass = async (classId) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      try {
        await classService.deleteClass(classId);
        setClasses(classes.filter(cls => cls.id !== classId));
      } catch (error) {
        console.error('Error deleting class:', error);
      }
    }
  };

  const getUniqueMedia = () => {
    const media = [...new Set(classes.map(cls => cls.medium))];
    return media.sort();
  };

  return (
    <div className="classes-list-page">
      <div className="page-header">
        <div>
          <h1>Classes Management</h1>
          <p>Manage all classes and divisions</p>
        </div>
        <button 
          className="btn-create"
          onClick={() => navigate('/admin/classes/create')}
        >
          + Create New Class
        </button>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filterValue={filterMedium}
        onFilterChange={setFilterMedium}
        filterOptions={[
          { value: 'all', label: 'All Media' },
          ...getUniqueMedia().map(medium => ({
            value: medium,
            label: `${medium} Medium`
          }))
        ]}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {loading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading classes...</p>
        </div>
      ) : filteredClasses.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🏫</div>
          <h3>No Classes Found</h3>
          <p>
            {searchTerm || filterMedium !== 'all' 
              ? 'Try adjusting your filters'
              : 'Get started by creating your first class'}
          </p>
          {(!searchTerm && filterMedium === 'all') && (
            <button 
              className="btn-primary"
              onClick={() => navigate('/admin/classes/create')}
            >
              Create First Class
            </button>
          )}
        </div>
      ) : (
        <div className={`classes-${viewMode}`}>
          {filteredClasses.map(cls => (
            <ClassCard
              key={cls.id}
              classData={cls}
              onEdit={() => navigate(`/admin/classes/edit/${cls.id}`)}
              onDelete={() => handleDeleteClass(cls.id)}
              onView={() => navigate(`/admin/classes/${cls.id}`)}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}

      <div className="stats-footer">
        <div className="stat-item">
          <span className="stat-label">Total Classes:</span>
          <span className="stat-value">{classes.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Total Divisions:</span>
          <span className="stat-value">
            {classes.reduce((sum, cls) => sum + cls.divisions.length, 0)}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Total Capacity:</span>
          <span className="stat-value">
            {classes.reduce((sum, cls) => 
              sum + (cls.divisions.length * cls.maxStudentsPerDivision), 0
            )} students
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClassesList;