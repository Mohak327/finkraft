import React from 'react';

export const ThemedButton = ({ content, icon, onClick, styleClass }) => {
  const buttonStyles = {
    height: '2.5rem',
    transition: 'transform 0.3s',
    borderRadius: '0.375rem',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(to left, #6e5494, #300066, #300066)',
    color: '#ffffff',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.3125rem 1.25rem',
    fontSize: '1rem',
    fontWeight: '500',
  };

  const hoverStyles = {
    transform: 'scale(1.05)',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={styleClass ? styleClass : ''}
      style={{ ...buttonStyles, ':hover': hoverStyles }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
        <p style={{marginLeft: '6px'}}>{content}</p>
      </div>
    </button>
  );
};