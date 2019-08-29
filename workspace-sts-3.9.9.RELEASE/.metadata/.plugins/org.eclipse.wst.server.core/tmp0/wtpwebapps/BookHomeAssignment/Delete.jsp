<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Delete</title>
</head>
<body>
<form method="post" action="servelet">
ID: <input type="text" name="id">
<input type="hidden" name="status" value="delete">
<input type="submit" value="submit">
</form>
</body>
</html>