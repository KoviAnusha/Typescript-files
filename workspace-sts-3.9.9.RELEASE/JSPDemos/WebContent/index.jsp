<%@ page import="java.util.Date" language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
				<b><i>This is some static content.</i></b><br>
				Sum of 1+1= <%=1+1 %><br> <%-- assignment--%>
				Today is <%= new Date() %> <%-- assignment--%>
				
				<%!int i=0; %> <%-- declarations --%>
				<%i++; %><br>
				This page is accessed for <%=i %> times.<br>
				<%out.println("Date "+new Date()); %><br>
</body>
</html>