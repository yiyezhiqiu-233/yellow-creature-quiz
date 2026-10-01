CREATE TABLE `results` (
	`id` text NOT NULL,
	`owner` text NOT NULL,
	`created_at` text NOT NULL,
	`payload` text NOT NULL,
	PRIMARY KEY(`id`, `owner`)
);
--> statement-breakpoint
CREATE INDEX `idx_results_owner_created` ON `results` (`owner`,`created_at`);