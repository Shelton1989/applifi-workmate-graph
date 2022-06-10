"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyWhereInput_1 = require("../inputs/ReplyWhereInput");
let ReplyListRelationFilter = class ReplyListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereInput_1.ReplyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereInput_1.ReplyWhereInput)
], ReplyListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereInput_1.ReplyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereInput_1.ReplyWhereInput)
], ReplyListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereInput_1.ReplyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereInput_1.ReplyWhereInput)
], ReplyListRelationFilter.prototype, "none", void 0);
ReplyListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyListRelationFilter", {
        isAbstract: true
    })
], ReplyListRelationFilter);
exports.ReplyListRelationFilter = ReplyListRelationFilter;
