import React from 'react';

interface DateFormatterProps {
    date: string;
}
const DateFormatter: React.FC<DateFormatterProps> = ({ date }) => {
    const parsedDate = new Date(date);
    const formattedDate = `${parsedDate.getDate()}`;
    return <p className="text-sm font-medium font-sans">{formattedDate}</p>;
};

export default DateFormatter;
