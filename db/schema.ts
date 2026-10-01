import {sqliteTable,text,primaryKey,index} from 'drizzle-orm/sqlite-core';
export const results=sqliteTable('results',{id:text('id').notNull(),owner:text('owner').notNull(),createdAt:text('created_at').notNull(),payload:text('payload').notNull()},t=>[primaryKey({columns:[t.id,t.owner]}),index('idx_results_owner_created').on(t.owner,t.createdAt)]);
