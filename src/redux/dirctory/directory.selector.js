import { createSelector } from 'reselect'

const Directory = state => state.directory

const selectDirectory = createSelector(
    [Directory],
    directory => directory.sections 
)

export default selectDirectory;