"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQueriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryOrderByWithRelationInput_1 = require("../../../inputs/LLMQueryOrderByWithRelationInput");
const LLMQueryWhereInput_1 = require("../../../inputs/LLMQueryWhereInput");
const LLMQueryWhereUniqueInput_1 = require("../../../inputs/LLMQueryWhereUniqueInput");
const LLMQueryScalarFieldEnum_1 = require("../../../../enums/LLMQueryScalarFieldEnum");
let UserQueriesArgs = class UserQueriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereInput_1.LLMQueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereInput_1.LLMQueryWhereInput)
], UserQueriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryOrderByWithRelationInput_1.LLMQueryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserQueriesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], UserQueriesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserQueriesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserQueriesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryScalarFieldEnum_1.LLMQueryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserQueriesArgs.prototype, "distinct", void 0);
UserQueriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserQueriesArgs);
exports.UserQueriesArgs = UserQueriesArgs;
