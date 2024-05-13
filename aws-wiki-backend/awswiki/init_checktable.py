import mysql.connector
from mysql.connector import Error

def create_connection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            password=user_password,
            database=db_name
        )
        print("Connection to MySQL DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")
    return connection

def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print("Query executed successfully")
    except Error as e:
        print(f"The error '{e}' occurred")

def create_table(connection):
    create_photo_table = """
    CREATE TABLE IF NOT EXISTS photo_photo (
        id INT AUTO_INCREMENT PRIMARY KEY,
        tag VARCHAR(255) NOT NULL,
        date DATETIME NOT NULL,
        image VARCHAR(255) NOT NULL
    )CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    """
    create_note_table = """
    CREATE TABLE IF NOT EXISTS note_note (
        id INT AUTO_INCREMENT PRIMARY KEY,
        tag VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        writer VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        date DATETIME NOT NULL,
        image VARCHAR(255) NOT NULL
    )CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    """
    create_job_table = """
    CREATE TABLE IF NOT EXISTS job_job (
        id INT AUTO_INCREMENT PRIMARY KEY,
        tag VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        writer VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        date DATETIME NOT NULL,
        image VARCHAR(255) NOT NULL
    )CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    """
    execute_query(connection, create_photo_table)
    execute_query(connection, create_note_table)
    execute_query(connection, create_job_table)

# Replace the host, user, password, and database name with your details
connection = create_connection("192.168.56.100", "root", "pass123#", "awswiki_db")
create_table(connection)
