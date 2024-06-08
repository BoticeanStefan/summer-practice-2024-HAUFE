// src/components/CompanyCard.js
import React from 'react';

const CompanyCard = ({ company }) => {
return (
    <div style = {styles.card}>
    <h2>{company.name}</h2>
    <p>{company.description}</p>
    <a href={company.website}
    targe = 'blank'
</h1>Visit Website</h1>
);
};

const styles = {
card: {
border: '1px solid #ccc',
padding: '1rem',
margin: '1rem',
borderRadius: '8px',
boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}
};

export default CompanyCard;