package edu.pitt.webproject;

import java.io.IOException;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.pitt.webproject2.facade.GameRecordFacade;

/**
 * Servlet implementation class SaveGame
 */
@WebServlet("/SaveGame")
public class SaveGame extends HttpServlet {
	@EJB
	GameRecordFacade rf;
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SaveGame() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String infor="";
		int id = Integer.parseInt(request.getParameter("userID"));
		String position=request.getParameter("coordinate");
		System.out.println(position);
		
		if(rf.checkUserInJson(id) == 0){
			rf.addJsonToDB(id, position);
			infor = "Save";
		}else{
			infor = "This userID have record";
			rf.coverJsonToDB(id, position);
		}
			
		
		response.getWriter().write("save");
		response.getWriter().flush();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
