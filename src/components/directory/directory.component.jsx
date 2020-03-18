import React from 'react';
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import selectDirectory from '../../redux/dirctory/directory.selector'
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

  const Directory = ({Sections}) => {
    return (
      <div className='directory-menu'>
        {Sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }

  const mapStateToProps = () => createStructuredSelector({
    Sections : selectDirectory
  })


export default connect(mapStateToProps)(Directory);
