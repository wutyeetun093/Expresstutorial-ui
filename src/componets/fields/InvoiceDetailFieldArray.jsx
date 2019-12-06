import React from 'react';
import _ from 'lodash';
import { FieldArray } from 'redux-form';
import { Button, Icon } from 'rsuite';
import styles from './BookingDetailFieldArray.module.scss';
import { formatCurrency } from '../../utils/Utils';
import InvoiceField from './InvoiceField';

const renderComponent = ({ fields, invoiceDetails }) => {
  let subTotal = 0;
  let total = 0;
  return (
    <div>
      <table className={styles.detailTable}>
        {!_.isEmpty(invoiceDetails) && (
          <thead>
            <tr>
              <th className={styles.detailTableHeader}>Item</th>
              <th className={styles.detailTableHeader}>Tags</th>
              <th className={styles.detailTableHeader}>Description</th>
              <th className={styles.detailTableHeader}>Price</th>
              <th className={styles.detailTableHeader}>Qty</th>
              <th className={styles.detailTableHeader}>subTotal</th>
            </tr>
          </thead>
        )}
        <tbody>
          {fields.map((member, index) => {
            const key = index + 1;
            const detail = invoiceDetails && invoiceDetails[index];

            if (detail) {
              subTotal = detail.quantity * detail.price;
              total += subTotal;
            }

            return (
              <tr key={key}>
                <td>
                  <InvoiceField name={`${member}.itemName`} id="itemName" />
                </td>
                <td>
                  <InvoiceField name={`${member}.tags`} id="tags" />
                </td>
                <td>
                  <InvoiceField name={`${member}.note`} id="note" />
                </td>
                <td>
                  <InvoiceField name={`${member}.price`} id="price" />
                </td>
                <td>
                  <InvoiceField name={`${member}.quantity`} id="quantity" />
                </td>
                <td>{subTotal}</td>
                <td>
                  <Button onClick={() => fields.remove(index)} size="xs">
                    <Icon icon="minus" />
                  </Button>
                </td>
              </tr>
            );
          })}
          {!_.isEmpty(invoiceDetails) && (
            <>
              <tr>
                <td colSpan="3" className={styles.detailTableChild} />
                <td className={styles.detailTableChild} colSpan="2">
                  Total
                </td>
                <td className={styles.detailTableChild}>
                  {formatCurrency(total)}
                </td>
              </tr>
              <tr>
                <td colSpan="3" />
                <td colSpan="2">Discount</td>
                <td>$ 0</td>
              </tr>
              <tr>
                <td colSpan="3" />
                <td colSpan="2">Net Amount:</td>
                <td>{total}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

const InvoiceDetailFieldArray = props => {
  return (
    <FieldArray
      name={props.name}
      id={props.id}
      component={renderComponent}
      invoiceDetails={props.invoiceDetails && props.invoiceDetails}
      authUser={props.authUser}
    />
  );
};

export default InvoiceDetailFieldArray;
