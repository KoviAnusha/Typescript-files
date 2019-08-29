package com.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Sangeeta
 */
public class MathsController extends MultiActionController{
    public ModelAndView add(HttpServletRequest req, HttpServletResponse res){
        Integer i1=Integer.parseInt(req.getParameter("num1"));
        Integer i2=Integer.parseInt(req.getParameter("num2"));
        ModelAndView mv=new ModelAndView("result");
        mv.addObject("result",i1+i2);
        return mv;
        
                
    } 
    public ModelAndView sub(HttpServletRequest req, HttpServletResponse res){
        Integer i1=Integer.parseInt(req.getParameter("num1"));
        Integer i2=Integer.parseInt(req.getParameter("num2"));
        ModelAndView mv=new ModelAndView("result");
        mv.addObject("result",i1-i2);
        return mv;
                
                
    }
}
