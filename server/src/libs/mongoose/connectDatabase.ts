import { connect } from "mongoose";

async function connectDatabase() {
	try {
    await connect(process.env.MONGODB_URI as string);
    console.log("connect mongodb successfully.");
  }
  catch (err) { console.error("[ERROR]: failed to connect mongodb.", err); }
}

export default connectDatabase;