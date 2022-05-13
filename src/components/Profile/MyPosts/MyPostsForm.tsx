import React, { FC } from 'react';
import styles from './MyPosts.module.scss';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { maxLength300, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

export type FormDataType = {
    newPost: string
}

const MyPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={Textarea} 
                        name="newPost"
                        placeholder="print your post here..." 
                        cols="40" rows="7"
                        validate={[required, maxLength300]} />
            </div>
            <div className={styles.btnBlock} >
                <button className="sendButton">
                    Add new post
                </button>
            </div> 
        </form>
    )
}

export default reduxForm<FormDataType>({form: 'postForm'})(MyPostForm);
