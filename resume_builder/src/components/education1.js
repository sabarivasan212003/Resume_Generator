import React from 'react';
import '../style/ReactTemplate.css'; // Import the CSS file for styling

const ReactTemplate = () => {
  return (
    <div className="container">
      
{/* <!DOCTYPE html> */}
<html>
<head>
	<title>Resume Template</title>
	<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
	<div class="container">
		<header>
			<h1>John Doe</h1>
			<p>Web Developer</p>
		</header>
		<section class="personal-info">
			<h2>Personal Information</h2>
			<ul>
				<li><strong>Email:</strong> john.doe@email.com</li>
				<li><strong>Phone:</strong> 123-456-7890</li>
				<li><strong>Address:</strong> 123 Main St, Anytown USA</li>
			</ul>
		</section>
		<section class="education">
			<h2>Education</h2>
			<ul>
				<li><strong>Bachelor's Degree:</strong> Computer Science, University of Anytown, 2015-2019</li>
				<li><strong>Master's Degree:</strong> Web Development, University of Anytown, 2019-2021</li>
			</ul>
		</section>
		<section class="skills">
			<h2>Skills</h2>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>PHP</li>
				<li>SQL</li>
			</ul>
		</section>
		<section class="experience">
			<h2>Experience</h2>
			<ul>
				<li><strong>Web Developer:</strong> ABC Company, 2021-present</li>
				<li><strong>Web Developer Intern:</strong> XYZ Company, 2020-2021</li>
			</ul>
		</section>
	</div>
</body>
</html>

    </div>
  );
};

export default ReactTemplate;
