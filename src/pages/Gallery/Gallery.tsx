import { Alert } from '@mui/material';
import React, { FC } from 'react';
import { TitlebarBelowImageList } from '../../components/common/Panels/ImageList';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';

const Gallery: FC = () => {
    return (
        <div>
            <h2>Gallery</h2>
            <Alert severity="error">The component is in development porocess!</Alert>
            <TitlebarBelowImageList/>
        </div>
    )
}

export default withAuthNavigate(Gallery);
