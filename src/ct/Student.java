package ct;


public class Student {
	int rollNo;
	static String name;
	static int age;

	public Student(int rollNo,String name,int age) {
		this.rollNo = rollNo;
		this.name = name;
		this.age = age;
	}
	
	public static void main(String[] args) {
		Student st1 = new Student(100,"ganga",25);
		System.out.println(st1.name);
	}
}
