import React, { useEffect, useState } from "react";
import { Table, Icon, IconButton } from "rsuite";
import _ from "lodash";
import { connect } from "react-redux";
import { getFashions } from "../../../services/fashion/FashionAction";

import TagUpdateModal from "./FashionUpdateModal";

const { Column, HeaderCell, Cell } = Table;

const FashionTable = props => {
  useEffect(() => {
    const getAllFashions = props.getFashions;
    getAllFashions();
  }, [props.getFashions]);

  const { fashions, isPending } = props;
  console.log("fash==", fashions);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [selectedTag, setSelectedTag] = useState();
  return (
    <>
      <>
        <Table data={_.map(fashions)} height={500}>
          <Column width={70} align="center" fixed>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={250}>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="name" />
          </Column>
          <Column width={250}>
            <HeaderCell>Brand</HeaderCell>
            <Cell dataKey="name" />
          </Column>
          <Column width={250}>
            <HeaderCell>Quantity</HeaderCell>
            <Cell dataKey="name" />
          </Column>
          <Column width={250}>
            <HeaderCell>Price</HeaderCell>
            <Cell dataKey="name" />
          </Column>

          {/* <Column fixed="right">
              <HeaderCell>Options</HeaderCell>
              <Cell>
                {rowData => (
                  <>
                    <IconButton
                      icon={<Icon icon="edit" />}
                      className="mr-4"
                      appearance="ghost"
                      size="xs"
                      onClick={() => {
                        setIsOpenUpdateModal(true);
                        setSelectedTag(rowData);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </>
                )}
              </Cell>
            </Column> */}
        </Table>

        {/* <TagUpdateModal
            initialValues={selectedTag}
            isShow={isOpenUpdateModal}
            onClose={() => {
              setIsOpenUpdateModal(false);
            }}
          /> */}
      </>
      )}
    </>
  );
};

const mapStateToProps = ({ fashions }) => ({
  fashions: fashions && fashions.data,
  isPending: fashions.isPending,
  paginations: fashions && fashions.paginations
});

export default connect(mapStateToProps, { getFashions })(FashionTable);
