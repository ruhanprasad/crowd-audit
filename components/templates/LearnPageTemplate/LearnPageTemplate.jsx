import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'

import CustomText from '../../atoms/CustomText'
import CustomProgressBar from '../../molecules/CustomProgressBar'

const useStyles = makeStyles(() => ({
  container: {
    padding: '5em 5em'
  },
  containerTop: {
    padding: '10em 5em 5em 5em'
  },
  gridItemLeft: {
    paddingRight: '10em'
  },
  gridItemRight: {
    paddingLeft: '5em'
  },
  statBox: {
    paddingLeft: '10em',
    paddingRight: '10em',
    paddingTop: '5em'
  }
}))

const LearnPageTemplate = () => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.containerTop} container>
        <Grid className={classes.gridItemLeft} item xs={6}>
          <CustomText fontSize="1.667em" fontWeight="700" text="What is this project about?" />
          <CustomText
            fontSize="1.333em"
            fontWeight="400"
            text="Google Computer Vision is extensively used around the globe for learning new information. Google uses it’s advanced computer vision ML model to produce labels for images that describe them. This model helps in generating quick results in real-time and high-stakes tasks that can allow quick description and categorization of images. However, ML engineers of this project have identifed cases of harmful biases against minority groups. They want the crowd auditors to help them identify various biases against minorities and come up with hypothesis to find a solution."
          />
        </Grid>
        <Grid className={classes.gridItemRight} item xs={6}>
          <CustomText fontSize="1.667em" fontWeight="700" text="What will you see in this project?" />
          <CustomText
            fontSize="1.333em"
            fontWeight="400"
            text="You’ll see a subset of images that have been labeled by the Computer Vision ML model. These images are a collection of random image types that are taken from multiple applications and use cases where Google’s Computer Vision is utilised. You’ll see an image and associated labels for each image that has been produced by the ML model. The audit tasks especially asks for minorities that may be affected due to mislabels and how severely does it impacts them."
          />
        </Grid>
      </Grid>
      <Box className={classes.container} container>
        <CustomText fontSize="1.667em" fontWeight="700" text="Project Data" />
        <Box className={classes.statBox}>
          <CustomProgressBar value={45} />
        </Box>
      </Box>
    </>
  )
}

export default LearnPageTemplate
