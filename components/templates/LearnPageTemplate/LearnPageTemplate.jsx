import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'

import ProjectData from '../../organisms/ProjectData'
import ProjectDescription from '../../organisms/ProjectDescription'
import ProjectHelp from '../../organisms/ProjectHelp'
import ProjectMedia from '../../organisms/ProjectMedia'

const useStyles = makeStyles(() => ({
  container: {
    padding: '3.063rem 3.063rem'
  },
  containerTop: {
    padding: '5.5rem 3.063rem 3.063rem 3.063em'
  }
}))

const LearnPageTemplate = () => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.containerTop} container>
        <ProjectDescription />
      </Grid>
      <Box className={classes.container}>
        <ProjectData />
      </Box>
      <Grid className={classes.container} container>
        <ProjectHelp />
      </Grid>
      <Box className={classes.container}>
        <ProjectMedia />
      </Box>
    </>
  )
}

export default LearnPageTemplate
