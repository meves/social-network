import React, { FC } from 'react';
import styles from './NewMessage.module.scss';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { maxLength300, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

export type FormDataType = {
    newMessage: string
}
const NewMessageForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                       name="newMessage"
                       placeholder="print your message here..."
                       cols="40" rows="7"
                       validate={[required, maxLength300]} />
            </div>
            <div className={styles.btnBlock} >
                <button>
                    Add new message
                </button>
            </div>
        </form>
    )
}

export default reduxForm<FormDataType>({form: 'messageForm'})(NewMessageForm);