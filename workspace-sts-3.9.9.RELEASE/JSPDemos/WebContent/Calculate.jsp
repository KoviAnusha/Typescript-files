<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    errorPage="error.jsp" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
The sum of user provided numbers: <% int n1=Integer.parseInt(request.getParameter("num1"));  %>
<% int n2=Integer.parseInt(request.getParameter("num2"));  %>
<%int result=n1+n2; %>
<%=result %>
<%-- <%@include file="index.jsp" %> or  --%>
<jsp:forward page="index.jsp"></jsp:forward> <%-- contents of jsp are not included --%>
<%--jsp:include page="index.jsp" </jsp:include> --%>
</body>
</html>