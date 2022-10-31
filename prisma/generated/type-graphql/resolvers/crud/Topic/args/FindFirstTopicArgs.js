"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTopicArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicOrderByWithRelationInput_1 = require("../../../inputs/TopicOrderByWithRelationInput");
const TopicWhereInput_1 = require("../../../inputs/TopicWhereInput");
const TopicWhereUniqueInput_1 = require("../../../inputs/TopicWhereUniqueInput");
const TopicScalarFieldEnum_1 = require("../../../../enums/TopicScalarFieldEnum");
let FindFirstTopicArgs = class FindFirstTopicArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereInput_1.TopicWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereInput_1.TopicWhereInput)
], FindFirstTopicArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicOrderByWithRelationInput_1.TopicOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTopicArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], FindFirstTopicArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTopicArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTopicArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicScalarFieldEnum_1.TopicScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTopicArgs.prototype, "distinct", void 0);
FindFirstTopicArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTopicArgs);
exports.FindFirstTopicArgs = FindFirstTopicArgs;
