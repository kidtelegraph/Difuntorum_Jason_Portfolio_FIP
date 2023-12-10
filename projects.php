<html>
<?php

require_once('connect.php');

// Check if 'id' parameter is set in the URL
if (isset($_GET['id'])) {
    // Sanitize the input to prevent SQL injection
    $project_id = mysqli_real_escape_string($connect, $_GET['id']);

    // Run query to select specific project information
    $query = "SELECT projects.title, projects.project_details, projects.published_date, projects.project_image
              FROM projects
              WHERE projects.id = '$project_id'";

    $result = mysqli_query($connect, $query);

    if ($result) {
        $row = mysqli_fetch_assoc($result);

        echo '<head>';
        echo '<title>' . $row['title'] . '</title>';
        echo '</head>';
        echo '<body>';
        echo '<section>';
        echo '<div class="project_details">';
        echo '<h1>' . $row['title'] . '</h1>';
        echo '<p>Project Details: ' . $row['project_details'] . '</p>';
        echo '<p>Published Date: ' . $row['published_date'] . '</p>';
        echo '<img src="' . $row['project_image'] . '" alt="' . $row['title'] . '">';
        echo '</div>';
        echo '</section>';
        echo '</body>';
    } else {
        echo 'Error: failed retrieving project details ' . mysqli_error($connect);
    }
} else {
    echo 'Error: Missing project ID parameter.';
}

?>
</html>