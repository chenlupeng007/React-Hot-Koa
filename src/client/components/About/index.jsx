import React from 'react';
import { connect } from 'react-redux';
import styles from './About.scss'

const About = ({ isMobile }) => (
  <h1 className={styles.About}>
    About - {isMobile ? 'mobile': 'desktop'}
  </h1>
)

const mapStateToProps = ({ device }) => ({
  isMobile: device.isMobile
})

export default connect(mapStateToProps)(About)