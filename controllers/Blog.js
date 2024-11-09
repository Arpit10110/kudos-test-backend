import {BlogModel} from "../model/BlogModel.js"

export const createblog = async(req, res) =>{
    try {
        const {title,desc,date}= req.body;

        await BlogModel.create({
            title: title,
            desc: desc,
            date:date
        })
        res.json({
            success: true,
            message: "Blog created successfully"
        })

    } catch (error) {
        res.json({
            success: false,
            message: "try again later"
        })
    }
}

export const fetchBlog = async (req, res) => {
    try {
      const blogs = await BlogModel.find();
      res.json({
        success: true,
        blogs: blogs,
      });
    } catch (error) {
      res.json({
        success: false,
        message: "Failed to fetch blogs. Please try again later.",
      });
    }
  };