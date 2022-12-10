import { useMemo, useState } from 'react';
import { useTable, TableSheet, TableHead, Header, Th, Td } from 'react-table';
import styled from 'styled-components';

function Menu1(){
        /* 데이터 생성 구간 */
        const data: { col1: string; col2: string }[] = useMemo(
            () => [
              {
                bk_seq: "1",
                bk_name: "귀멸의 칼날",
                bk_publisher: "출판사",
                reg_user: "안상재",
                reg_date: "2021-08-03 01:15:49",
                mod_user: "안상재",
                mod_date: "2021-08-03 01:15:49",
              },
              {
                bk_seq: "2",
                bk_name: "따끈따근 베이커리",
                bk_publisher: "출판사",
                reg_user: "반지환",
                reg_date: "2021-08-03 01:15:49",
                mod_user: "반지환",
                mod_date: "2021-08-03 01:15:49",
              },
              {
                bk_seq: "3",
                bk_name: "진격의 거인",
                bk_publisher: "출판사",
                reg_user: "박나혜",
                reg_date: "2021-08-03 01:15:49",
                mod_user: "박나혜",
                mod_date: "2021-08-03 01:15:49",
              },

            ],
            []
        );

        /* 테이블 헤더, 데이터 지정 구간 */
        const columns: Column[] = useMemo(
            () => [
              {
                Header: "번호",
                accessor: "bk_seq", // accessor is the "key" in the data
              },
              {
                Header: "제목",
                accessor: "bk_name",
              },
              {
                Header: "출판사",
                accessor: "bk_publisher",
              },
              {
                Header: "등록자",
                accessor: "reg_user",
              },
              {
                Header: "등록일",
                accessor: "reg_date",
              },
              {
                Header: "수정자",
                accessor: "mod_user",
              },
              {
                Header: "수정일",
                accessor: "mod_date",
              },
            ],
            []
        );

       /* react-table 라이브러리에서 실제 테이블 생성 시 필요한 변수들 */
       const {
              getTableProps, //table props
              getTableBodyProps, //table body props
              headerGroups, //헤더들
              rows, //로우 데이터들
              prepareRow
        } = useTable({ columns, data });

        /* 테이블 생성후 리턴 */
        return(
            <table {...getTableProps}>
                  <thead>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
        );
}

export default Menu1;