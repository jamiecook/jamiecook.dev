import * as React from "react";

export interface PopupProps {
  school_name: string,
  num_students: number,
  link: string
}


export function Popup(props: PopupProps) {
    let { school_name, num_students, link } = props
    return (
        <div className='align-center wmax240'>
            <h2 className="txt-bold txt-s block mt6">{school_name}</h2>
            <table className='mt3 w-full'>
                <tbody>
                    <TableRow name="Enrolled Students" value={num_students} />
                    <TableRow name="Homepage" value={link}  />
                </tbody>
            </table>
        </div>
    );
}


interface TableRowProps { name: string, value: string | number | null | undefined }


function TableRow(props: TableRowProps) {
    let { name, value } = props;
    let display: string;
    if (value !== undefined && value !== null) {
      if (typeof value === "number") {
        display = value.toFixed(0);
      } else {
        display = value;
      }
    }
    else {
        display = "-";
    }
    return (
        <tr>
            <td><div className='py3 mr12 txt-s color-gray'>{name}</div></td>
            <td><div className='pt3 txt-s color-gray'>{display}</div></td>
        </tr>
    )
}
