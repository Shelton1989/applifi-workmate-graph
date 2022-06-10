"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionWhereInput_1 = require("../inputs/ReactionWhereInput");
let ReactionListRelationFilter = class ReactionListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereInput_1.ReactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionWhereInput_1.ReactionWhereInput)
], ReactionListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereInput_1.ReactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionWhereInput_1.ReactionWhereInput)
], ReactionListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereInput_1.ReactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionWhereInput_1.ReactionWhereInput)
], ReactionListRelationFilter.prototype, "none", void 0);
ReactionListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionListRelationFilter", {
        isAbstract: true
    })
], ReactionListRelationFilter);
exports.ReactionListRelationFilter = ReactionListRelationFilter;
