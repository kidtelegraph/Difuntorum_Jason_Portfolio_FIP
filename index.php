<html>
<?php

require_once('connect.php');

// Run query to select project information
$query = 'SELECT projects.id, projects.title, projects.published_date, projects.project_image
          FROM projects';
$results = mysqli_query($connect, $query);
?>
<head>
  <style>
    .project_list {
      background-color: #ccc;
      padding: 20px;
      margin-bottom: 50px;
    }
  </style>
</head>
<body>
  <section>
    <?php
    while ($row = mysqli_fetch_array($results)) {
      echo '<div class="project_list">';
      echo '<h2>' . $row['title'] . ' (' . $row['published_date'] . ')</h2>';
      echo '<img src="' . $row['project_image'] . '" alt="' . $row['title'] . '">';
      echo '<p><a href="http://localhost:8888/Difuntorum_Jason_Portfolio_FIP/projects.php?id=' . $row['id'] . '">View Project</a></p>';
      echo '</div>';
    }
    ?>
  </section>
  <footer>
    <?php
    echo date("F j, Y, g:i a");
    ?>
  </footer>
</body>
</html>