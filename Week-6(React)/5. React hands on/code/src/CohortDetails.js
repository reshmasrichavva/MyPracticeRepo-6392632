import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails() {
  const cohorts = [
    {
      name: 'INTADMDF10 - .NET FSD',
      startedOn: '22-Feb-2022',
      status: 'Scheduled',
      coach: 'Aathma',
      trainer: 'Jojo Jose',
      color: 'blue'
    },
    {
      name: 'ADM21JF014 - Java FSD',
      startedOn: '10-Sep-2021',
      status: 'Ongoing',
      coach: 'Apoorv',
      trainer: 'Elisa Smith',
      color: 'green'
    },
    {
      name: 'CDBJF21025 - Java FSD',
      startedOn: '24-Dec-2021',
      status: 'Ongoing',
      coach: 'Aathma',
      trainer: 'John Doe',
      color: 'green'
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Cohorts Details</h2>
      <div className={styles.cardContainer}>
        {cohorts.map((cohort, index) => (
          <div key={index} className={styles.card}>
            <div className={`${styles.title} ${styles[cohort.color]}`}>
              {cohort.name}
            </div>

            <div className={styles.label}>Started On</div>
            <div className={styles.value}>{cohort.startedOn}</div>

            <div className={styles.label}>Current Status</div>
            <div className={styles.value}>{cohort.status}</div>

            <div className={styles.label}>Coach</div>
            <div className={styles.value}>{cohort.coach}</div>

            <div className={styles.label}>Trainer</div>
            <div className={styles.value}>{cohort.trainer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CohortDetails;

