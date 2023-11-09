
public class AreaPrint {
public static void main( String[] args ) {
/*	
Area.staticArea = "Test Static";
System.out.println(Area.staticArea);
Area area = new Area();
area.instanceArea = "Test Instance";
System.out.println(area.instanceArea);
*/
	
Area area1 = new Area("Instance1");
Area area2 = new Area("Instance2");

Area.staticArea = "Static1";

System.out.println(area1.instanceArea);
System.out.println(area2.instanceArea);
System.out.println(area1.staticArea);
System.out.println(area2.staticArea);


}
}

