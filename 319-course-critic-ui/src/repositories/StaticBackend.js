import { ReviewRepo } from "./ReviewRepo";
import { ClassRepo } from "./ClassRepo";

export class StaticBackend{

    constructor() {
        let Username = "CourseCriticUsername";
        let Password = "CourseCriticPassword";
        let Email = "CourseCritic@gmail.com";
        sessionStorage.setItem("ReviewRepo", JSON.stringify(ReviewRepo));
        sessionStorage.setItem("ClassRepo", JSON.stringify(ClassRepo));
    }

    
    static intializeRepos(){
        sessionStorage.setItem("ReviewRepo", JSON.stringify(ReviewRepo));
        sessionStorage.setItem("ClassRepo", JSON.stringify(ClassRepo));
    };

    static getReviewRepo(){
        ReviewRepo = sessionStorage.getItem("ReviewRepo");
        return ReviewRepo;
    }

    static addReview(title, difficultyScore, enjoyment, grade, description, classID){
        let newReview = {
            title: title,
            difficultyScore: difficultyScore,
            enjoyment: enjoyment,
            grade: grade,
            description: description,
            classID: classID 
        }
    
        ReviewRepo.push(newReview);
        sessionStorage.setItem("ReviewRepo", JSON.stringify(ReviewRepo));
    }

    static getClassScore = () => {
        sessionStorage.getItem("ReviewRepo");
    }
    
    static logReviewRepo() {
        console.log(JSON.stringify(ReviewRepo));
    }

    static getClassByID(findID){
        let ClassSave = JSON.parse(sessionStorage.getItem("ClassRepo"));
        return ClassSave.filter(obj => {return obj.classID == findID});
    }

    static gradeToPercent(grade){
        switch (grade){
            case "A": return 93;
            case "A-": return 90;
            case "B+": return 87;
            case "B": return 83;
            case "B-": return 80;
            case "C+": return 77;
            case "C": return 73;
            case "C-": return 70;
            case "D+": return 67;
            case "D": return 65;
            default: return 0;
        }
    }

    static updateClassMetrics(){
        let ReviewSave = JSON.parse(sessionStorage.getItem("ReviewRepo"));
        let ClassSave = JSON.parse(sessionStorage.getItem("ClassRepo"));
        ClassSave.forEach((item) => {
            item.numReviews = 0;
            item.totalReview = 0;
            item.totalDifficulty = 0;
            item.gradeTotal = 0;
        })

        ReviewSave.map((item) => {
            ClassSave[item.classID - 1].numReviews++;
            ClassSave[item.classID - 1].totalReview += item.enjoyment;
            ClassSave[item.classID - 1].totalDifficulty += item.difficultyScore;
            ClassSave[item.classID - 1].gradeTotal += this.gradeToPercent(item.grade);
        })


        ClassSave.forEach((item, index) => {
            item.classScore = (Math.round((item.totalReview / item.numReviews) * 10) / 10).toFixed(1);
            item.classDifficulty = (Math.round((item.totalDifficulty / item.numReviews) * 10) / 10).toFixed(1);
            item.averageGrade = (Math.round((item.gradeTotal / item.numReviews) * 10) / 10).toFixed(1);
        });

        sessionStorage.setItem("ReviewRepo", JSON.stringify(ReviewSave));
        sessionStorage.setItem("ClassRepo", JSON.stringify(ClassSave));
    }
}
