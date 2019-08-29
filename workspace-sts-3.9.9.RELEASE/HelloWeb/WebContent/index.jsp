<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="hello" method="get">
Name: <input type="text" name="n1">
<input type="submit" value="submit">
</form>
<%if(request.getAttribute("flag")!=null)
	out.println("You are not an admin");%>
</body>
</html>