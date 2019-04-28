import gulp from 'gulp'
import { styles } from './styles'
import { scripts } from './webpack'
import { server }  from './server'

export const dev   = gulp.series( server )
export const build = gulp.series( scripts, styles )

export default dev
