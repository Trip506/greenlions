<template>
	<div>
		<section class="form form1 woodm4_form1 cid-sUXFlpoYd0" id="form01-o">
			<div class="container">
				<div class="row">
					<div
						class="col-lg-10 col-md-12 mx-auto mbr-form"
						data-form-type="formoid"
					>
						<!--Formbuilder Form-->
						<form
							name="contact"
							action="/thanks"
							data-netlify="true"
							data-netlify-honeypot="bot-field"
							data-netlify-recaptcha="true"
							class="mbr-form form-with-styler"
						>
							<input type="hidden" name="form-name" value="contact" />

							<!-- Honeypot field -->
							<p style="display: none">
								<label id="contact-form-bot-label"> </label>
								Fill this in if you are not alive
								<input
									name="bot-field"
									aria-labelledby="contact-form-bot-label"
								/>
							</p>
							<div class="form-row">
								<div
									hidden="hidden"
									data-form-alert=""
									class="alert alert-success col-12"
								>
									Thanks for filling out the form! We'll get back to you soon!
								</div>
								<div
									hidden="hidden"
									data-form-alert-danger=""
									class="alert alert-danger col-12"
								>
									Oops...! some problem!
								</div>
							</div>
							<div class="dragArea form-row">
								<div class="col-lg-12 col-md-12 col-sm-12" style="">
									<div class="mbr-fonts-style pb-2 display-2 align-center">
										<img style="width: 100px" src="/images/mail.svg" alt="" />
									</div>
								</div>
								<div class="col-lg-12 col-md-12 col-sm-12" style="">
									<h5 class="mbr-fonts-style pb-2 display-2">Contact me</h5>
								</div>
								<div class="col-lg-12 col-md-12 col-sm-12">
									<p class="mbr-fonts-style pb-5 display-7">
										Don't hesitate to reach out to me if you have any
										questions&nbsp;
									</p>
								</div>
								<div
									class="col-lg-12 col-md-12 col-sm-12 form-group align-center"
								>
									<div class="form-row">
										<div class="col-lg-6 col-md-12 col-sm-12 form-group">
											<input
												v-model="form.firstname"
												type="text"
												name="nameFirst"
												placeholder="First Name"
												data-form-field="nameFirst"
												class="form-control text-multiple"
												value=""
												id="nameFirst-form01-o"
											/>
										</div>
										<div class="col-lg-6 col-md-12 col-sm-12 form-group">
											<input
												v-model="form.lastname"
												type="text"
												name="nameLast"
												placeholder="Last Name"
												data-form-field="nameLast"
												class="form-control text-multiple"
												value=""
												id="nameLast-form01-o"
											/>
										</div>
									</div>
								</div>
								<div
									data-for="phone"
									class="col-lg-6 col-md-12 col-sm-12 form-group"
									style=""
								>
									<input
										v-model="form.phone"
										type="tel"
										name="phone"
										placeholder="Phone"
										data-form-field="phone"
										class="form-control display-7"
										pattern="*"
										value=""
										id="phone-form01-o"
									/>
								</div>

								<div
									class="col-lg-6 col-md-12 check col-sm-12 form-group"
									data-for="checkbox"
								>
									<div class="form-control-label">
										<label
											for="checkbox"
											class="mbr-fonts-style display-7"
										></label>
									</div>
									<div class="form-check form-check-inline">
										<label class="form-check-label display-7"></label>
									</div>
									<div class="form-check form-check-inline">
										<label class="form-check-label display-7"></label>
									</div>
									<div class="form-check form-check-inline">
										<label class="form-check-label display-7"></label>
									</div>
								</div>
								<div
									class="col-lg-6 col-md-12 col-sm-12 form-group"
									data-for="message"
								>
									<textarea
										v-model="form.message"
										name="message"
										placeholder="Message"
										data-form-field="message"
										class="form-control display-7"
										id="message-form01-o"
									></textarea>
								</div>

								<div class="col-auto m-auto pt-5">
									<button
										type="submit"
										ref="submit"
										class="btn btn-primary-outline display-7"
									>
										SUBMIT
									</button>
									<br />
									<div
										data-netlify-recaptcha="true"
										class="form-row mt-5"
									></div>
								</div>
								<div class="col-lg-12 col-md-12 col-sm-12">
									<h4 class="mbr-fonts-style align-center pt-4 display-4">
										Remember: It's always quicker to just call me!&nbsp;
									</h4>
								</div>
							</div>
						</form>
						<!--Formbuilder Form-->
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			error: "",
			form: {
				firstname: "",
				lastname: "",

				phone: "",
				message: "",
				data: this.$store.state.staticData[4],
			},
		};
	},

	methods: {
		submitPost(e) {
			if (
				this.form.firstname &&
				this.form.lastname &&
				// this.form.email &&
				this.form.message &&
				this.form.phone
			) {
				return this.$refs.submit.click();
			} else {
				e.preventDefault();
				this.error = "Please fill in all the form fields";
			}
		},
	},
};
</script>