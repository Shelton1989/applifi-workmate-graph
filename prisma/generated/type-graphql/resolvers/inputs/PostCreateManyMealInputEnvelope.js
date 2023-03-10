"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyMealInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyMealInput_1 = require("../inputs/PostCreateManyMealInput");
let PostCreateManyMealInputEnvelope = class PostCreateManyMealInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateManyMealInput_1.PostCreateManyMealInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateManyMealInputEnvelope.prototype, "data", void 0);
PostCreateManyMealInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManyMealInputEnvelope", {
        isAbstract: true
    })
], PostCreateManyMealInputEnvelope);
exports.PostCreateManyMealInputEnvelope = PostCreateManyMealInputEnvelope;
