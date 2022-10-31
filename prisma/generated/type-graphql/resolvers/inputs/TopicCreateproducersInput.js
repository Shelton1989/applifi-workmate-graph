"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateproducersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicCreateproducersInput = class TopicCreateproducersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TopicCreateproducersInput.prototype, "set", void 0);
TopicCreateproducersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateproducersInput", {
        isAbstract: true
    })
], TopicCreateproducersInput);
exports.TopicCreateproducersInput = TopicCreateproducersInput;
