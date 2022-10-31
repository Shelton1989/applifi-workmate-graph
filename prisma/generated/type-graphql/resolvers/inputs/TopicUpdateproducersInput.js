"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdateproducersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicUpdateproducersInput = class TopicUpdateproducersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdateproducersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdateproducersInput.prototype, "push", void 0);
TopicUpdateproducersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdateproducersInput", {
        isAbstract: true
    })
], TopicUpdateproducersInput);
exports.TopicUpdateproducersInput = TopicUpdateproducersInput;
