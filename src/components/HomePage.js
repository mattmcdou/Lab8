import React from 'react';

const styles = {
    container: {
        padding: '10px 1vw',
    },
    table: {
        marginLeft: '2vw', 
        width: '100px',
        borderCollapse: 'collapse',
    },
    th: {
        borderBottom: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
    },
    td: {
        borderBottom: '1px solid #ddd',
        padding: '8px',
        textAllign: 'left',
    }
};

const HomePage = () => {
    return (
        <div style={styles.container}>
            <h2>Welcome to Our Product</h2>
            <p>This project is designed to showcase our abilities to work with
            React, including state managment, routing, and interacting with an API.</p>

            <h3>Creators:</h3>
            <table style={styles.table}>
                <thread>
                    <tr>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Role</th>
                    </tr>
                </thread>
                <tbody>
                    <tr>
                        <td style={styles.td}>Evan Mann</td>
                        <td style={styles.td}>Developer</td>
                    </tr>
                    <tr>   
                        <td style={styles.td}>Matthew McDougall</td>
                        <td style={styles.td}>Designer</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default HomePage;