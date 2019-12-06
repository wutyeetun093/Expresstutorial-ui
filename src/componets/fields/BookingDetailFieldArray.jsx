import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { FieldArray, formValueSelector } from 'redux-form';
import { Button, Icon } from 'rsuite';
import BookingField from './BookingField';
import styles from './BookingDetailFieldArray.module.scss';
import { formatCurrency } from '../../utils/Utils';

const renderComponent = ({ fields, bookingDetails }) => {
  let subTotal = 0;
  let total = 0;
  return (
    <div>
      <table className={styles.detailTable}>
        {!_.isEmpty(bookingDetails) && (
          <thead>
            <tr>
              <th className={styles.detailTableHeader}>Product</th>
              <th className={styles.detailTableHeader}>Qty</th>
              <th className={styles.detailTableHeader}>Note</th>
              <th className={styles.detailTableHeader}>Price</th>
              <th className={styles.detailTableHeader}>subTotal</th>
              <th className={styles.detailTableHeader} />
            </tr>
          </thead>
        )}
        <tbody>
          {fields.map((member, index) => {
            const key = index + 1;
            const detail = bookingDetails && bookingDetails[index];

            if (detail) {
              subTotal = detail.quantity * detail.price;
              total += subTotal;
            }

            return (
              <tr key={key}>
                <td>
                  <BookingField
                    name={`${member}.itemName`}
                    id="itemName"
                    readOnly
                  />
                </td>
                <td>
                  <BookingField name={`${member}.quantity`} id="quantity" />
                </td>
                <td>
                  <BookingField name={`${member}.note`} id="note" />
                </td>
                <td>
                  <BookingField name={`${member}.price`} id="price" />
                </td>
                <td>{formatCurrency(subTotal)}</td>
                <td>
                  <Button onClick={() => fields.remove(index)} size="xs">
                    <Icon icon="minus" />
                  </Button>
                </td>
              </tr>
            );
          })}
          {!_.isEmpty(bookingDetails) && (
            <>
              <tr>
                <td colSpan="3" className={styles.detailTableChild} />
                <td className={styles.detailTableChild}>Total</td>
                <td className={styles.detailTableChild} colSpan="2">
                  {formatCurrency(total)}
                </td>
              </tr>
              <tr>
                <td colSpan="3" />
                <td>Tax</td>
                <td colSpan="2">5%</td>
              </tr>
              <tr>
                <td colSpan="3" />
                <td>Net Amount:</td>
                <td colSpan="2">{formatCurrency(total - total * 0.05)}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

const BookingDetailFieldArray = props => {
  return (
    <FieldArray
      name={props.name}
      id={props.id}
      component={renderComponent}
      bookingDetails={props.bookingDetails}
      authUser={props.authUser}
    />
  );
};

const selector = formValueSelector('bookingDetailUpdateForm');

export default connect(state => ({
  bookingDetails: selector(state, 'bookingDetails'),
}))(BookingDetailFieldArray);
