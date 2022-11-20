"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicWhereUniqueInput = class TopicWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicWhereUniqueInput.prototype, "aggregateRatingId", void 0);
TopicWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicWhereUniqueInput", {
        isAbstract: true
    })
], TopicWhereUniqueInput);
exports.TopicWhereUniqueInput = TopicWhereUniqueInput;
