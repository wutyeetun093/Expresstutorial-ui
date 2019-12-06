import React from 'react';
import _ from 'lodash';
import { FieldArray } from 'redux-form';
import { Button, Icon } from 'rsuite';
import Field from './Field';
import styles from './TicketFieldArray.module.scss';

const renderComponent = ({ fields, tickets, fieldName }) => {
  return (
    <div>
      <table className={styles.table}>
        {!_.isEmpty(tickets) && (
          <thead>
            <tr>
              <th className={styles.tableHeader}>Alphabet</th>
              <th className={styles.tableHeader}>Number</th>
              <th className={styles.tableHeader} />
            </tr>
          </thead>
        )}
        <tbody>
          {fields.map((member, index) => {
            const key = index + 1;
            return (
              <tr key={key}>
                <td className={styles.tableTd}>
                  <Field
                    name={`${member}.number`}
                    id="number"
                    className={styles.tableField}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const TicketFieldArray = props => {
  return (
    <FieldArray
      name={props.name}
      id={props.id}
      component={renderComponent}
      tickets={props.tickets}
      authUser={props.authUser}
    />
  );
};

export default TicketFieldArray;
