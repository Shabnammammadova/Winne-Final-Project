import React from 'react';

interface DateFormatterProps {
    month: string;
}

const MonthFormatter: React.FC<DateFormatterProps> = ({ month }) => {
    const parsedMonth = new Date(month);

    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];


    const formattedMonth = `${monthNames[parsedMonth.getMonth()]}`;

    return <p className="text-sm font-medium font-sans">{formattedMonth}</p>;
};

export default MonthFormatter;