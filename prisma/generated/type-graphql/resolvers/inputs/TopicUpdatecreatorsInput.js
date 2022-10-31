"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdatecreatorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicUpdatecreatorsInput = class TopicUpdatecreatorsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdatecreatorsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicUpdatecreatorsInput.prototype, "push", void 0);
TopicUpdatecreatorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdatecreatorsInput", {
        isAbstract: true
    })
], TopicUpdatecreatorsInput);
exports.TopicUpdatecreatorsInput = TopicUpdatecreatorsInput;
