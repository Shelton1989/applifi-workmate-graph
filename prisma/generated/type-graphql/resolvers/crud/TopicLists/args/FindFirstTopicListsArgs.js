"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTopicListsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsOrderByWithRelationInput_1 = require("../../../inputs/TopicListsOrderByWithRelationInput");
const TopicListsWhereInput_1 = require("../../../inputs/TopicListsWhereInput");
const TopicListsWhereUniqueInput_1 = require("../../../inputs/TopicListsWhereUniqueInput");
const TopicListsScalarFieldEnum_1 = require("../../../../enums/TopicListsScalarFieldEnum");
let FindFirstTopicListsArgs = class FindFirstTopicListsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsWhereInput_1.TopicListsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsWhereInput_1.TopicListsWhereInput)
], FindFirstTopicListsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicListsOrderByWithRelationInput_1.TopicListsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTopicListsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsWhereUniqueInput_1.TopicListsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsWhereUniqueInput_1.TopicListsWhereUniqueInput)
], FindFirstTopicListsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTopicListsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTopicListsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicListsScalarFieldEnum_1.TopicListsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTopicListsArgs.prototype, "distinct", void 0);
FindFirstTopicListsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTopicListsArgs);
exports.FindFirstTopicListsArgs = FindFirstTopicListsArgs;
