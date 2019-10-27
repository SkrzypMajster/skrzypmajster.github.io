import React from 'react';
import './contact.component.scss';
import { Icon } from '../icon/icon.component';
import { ContactDataModel } from '../../models';

interface IProps {
  data: ContactDataModel
}

export const ContactComponent: React.FunctionComponent<IProps> = (props: IProps): JSX.Element => {
  const {
    address,
    email,
    phoneNumber
  } = props.data;

  return (
    <section id="contact" className="contact">
      <h3 className="contact__header">Contact me</h3>
      <p className="contact__sentence">I'd love your feedback!</p>
      <section className="contact__container">
        <div className="contact__card">
          <div className="contact__card-label">
            <Icon name="location" /> {address}
          </div>
          <div className="contact__card-label">
            <Icon name="phone" /> Phone: {phoneNumber}
          </div>
          <div className="contact__card-label">
            <Icon name="mail" /> Email: {email}
          </div>
        </div>
      </section>
    </section>
  );
}
