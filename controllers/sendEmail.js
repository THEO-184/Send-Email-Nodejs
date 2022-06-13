const nodemailer = require("nodemailer");
const Mailgun = require("mailgun.js");

const sendEmailEtherial = async (req, res) => {
	let testAccount = await nodemailer.createTestAccount();

	// connect transport service----ethereal
	const transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		auth: {
			user: "meghan.murazik31@ethereal.email",
			pass: "hnZxnhPhkdW4Ursad1",
		},
	});

	// send email

	const info = await transporter.sendMail({
		from: "'Theophilus Boakye' <theophilusboakye47@gmail.com>",
		to: "user1@example.com ,user2@example.com",
		subject: "I am testing email",
		html: "<h2>I have sent your email</h2>",
	});
	res.json(info);
};

const sendEmail = async (req, res) => {
	// connect transport service----ethereal
	const transporter = nodemailer.createTransport({
		host: "smtp.mailgun.org",
		port: 587,
		auth: {
			user: `postmaster@${process.env.DOMAIN}`,
			pass: `${process.env.API_KEY}`,
		},
	});
	const info = await transporter.sendMail({
		from: `foo@${process.env.DOMAIN}`,
		to: "theophilusboakye47@gmail",
		subject: "I am testing email",
		html: "<h2>I have sent your email</h2>",
	});

	res.send(info);
};

module.exports = sendEmail;

// Name	Meghan Murazik
// Username	meghan.murazik31@ethereal.email (also works as a real inbound email address)
// Password	hnZxnhPhkdW4Ursad1
